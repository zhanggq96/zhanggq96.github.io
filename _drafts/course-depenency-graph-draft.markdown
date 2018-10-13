---
layout: post
title:  "Course Dependency Graph"
date:   2017-10-13 21:00:00 -0400
author: George Zhang
categories: graph
custom_css: none
---

This project is about visualizing prerequisite relationships between courses offered at McMaster University as a graph.

![ ](https://i.imgur.com/4NAymjS.png){: .center-image }

The graph (CDG) contains three types of nodes: courses, AND nodes, and OR nodes. A course node represents a course and edges coming out of it indicates that the course requires some sort of prerequisite in whatever it is pointing to.

An AND node represents an "all" relationship; from the persepective of any nodes pointing to this specific AND node (parent nodes), all nodes that this AND node points to (children nodes) are requirements. An OR node similarly represents an "any" or "one of" relationship, where satisfying the requirement of only one child node is sufficient.

For example, in the above image, Comp Eng 4TN4 requires (Elec Eng 3TP3 and (one of Elec Eng 3TQ4, 3TQ3 or Stats 3Y03)).

As can be seen in the rightmost courses 2CI5 and 2CJ4, this graph is not a tree because multiple courses may have the same prerequisite course. A prerequisite graph logically should not have cycles otherwise students would be deadlocked out of being able to take courses; however, this graph may also include some recommended co-requisites, so it is possible there are some relationships which contain a cycle, though I am not aware of any.

# Building the prerequisites

To get all the prerequisite data I scraped the McMaster [Academic Calendars](https://academiccalendars.romcmaster.ca/preview_course_nopop.php?catoid=32&coid=177311) site for the text in the "Prerequisite(s)" section. Unfortunately, it appears to be human-written so there are inconsistencies and wording and occaisionally an ambiguous requirement. All the other data ("Co-requisite(s)", "Cross-list", "Anti-requisite(s)") is not used in the CDG.

{% highlight python %}
Prerequisite(s): ELECENG 3TP4 or 3TP3; one of ELECENG 3TQ4, ELECENG 3TQ3 or STATS 3Y03
{% endhighlight %}

Then, I wrote a small natural language processer that breaks the sentence down from top-up dividing on tokens such as semicolons, AND/ORs, and commas and generates a syntax tree representing logical relationships between a course and its prerequisites. At this point, it is a tree (even if the same course appeared multiple time in its prerequisites).

{% highlight python %}
AND[
    OR[
        ELECENG 3TP4, 
        3TP3
    ],
    OR[
        ELECENG 3TQ4, 
        3TQ3,
        STATS 3Y03
    ],
]
{% endhighlight %}

This tree object has some courses missing a subject name. To fix this, I performed subject inference by using a depth-first traversal to maintain the most recently seen subject and prepending it to any courses without a subject.

{% highlight python %}
AND[
    OR[
        ELECENG 3TP4, 
        ELECENG 3TP3
    ],
    OR[
        ELECENG 3TQ4, 
        ELECENG 3TQ3,
        STATS 3Y03
    ],
]
{% endhighlight %}

At this point the tree has all the information needed, so it is stored to a database.

# Visualization

The trees for all the courses in the database are written to one large json file, so the visualization can run without a backend. To build the visualization, I used the vis.js network plot.

At this point everything is still stored in the heirarchical tree format, so the next step would be to convert this tree to a set of vertices and edges. Keep in mind that the algorithm should recursively go through all the prerequisites of each course until it reaches a course with no further prerequisites. Moreover, it should be possible to have multiple "root" courses displayed at once compactly, merging all their trees into a graph. A naive approach to this like a simple depth first traversal for each root course will do, but we should be careful to not include duplicate nodes or edges when displaying these graphs.

To do this, I created some js objects dedicated to checking whether a node or edge previously exists. For edges and course nodes, this is pretty straightforward. However, we also want this behaviour with logic branches! Take the following example:

{% highlight python %}
# Comp Eng 4TN4
AND[
    OR[
        ELECENG 3TP4, 
        ELECENG 3TP3
    ],
    OR[
        ELECENG 3TQ4, 
        ELECENG 3TQ3,
        STATS 3Y03
    ],
]

# Comp Eng 4TL4
OR[
    ELECENG 3TP4, 
    ELECENG 3TP3
]
{% endhighlight %}

To avoid duplicating on the courses 3TP3/3TP4 is not enough; there would be an entire second "OR" node which redundantly points to the same courses as the first "OR" node. To resolve this, I also included hashing of entire subbranches as the key of a javascript object that maintained the logic nodes.

Now the graph generation is complete and we're done. The only further simplification on my mind right now is handling logical redundancies in the building portion (e.g. converting AND[A, AND[B, C]] into AND[A, B, C]), which I unfortunately never got around to doing. There are also a few incorrectly handled courses (e.g. Elec Eng 3TR4, Comp Sci 4TE3) mainly due me not handling edge cases for the inconsistent use of language in AcademicCalendars, but for every other course I tested it works well!