The StyleBox which in concept is a styled template that can be shared across several objects. In the image below, on the left hand side a theme list can be seen, which represents the different style sheets. A Style Sheet or a "theme" can be treated as a regular object that you can modify all its style on the sidebar at right.

![20191126224958.png](https://i.loli.net/2019/11/27/1J4R3wlcEopYuGh.png)

These style sheets can be connected to objects by dragging a line from the DOT to the objects. Or you can use mouse to select objects while pressing CTRL key. And all objects linked to that "theme" will inherit all these styles. You can click on the "link" line to unlink an object from a theme.

![20191203210402.png](https://i.loli.net/2019/12/04/4lvDLGAzm3fOH9P.png)

A "theme" is a shape as well that it represents all its properties visually. What you see is what you get. We can show or hide properties of a theme.

![20191203210259.png](https://i.loli.net/2019/12/04/5De4N6MUrkzWtfX.png)

On the other hand, an object can be linked to multiple theme as well. If there are several presences of a property in multiple themes. The property at the top has the higher priority.

An example is shown below where the style opacity and color conflicts. In this case, the top opacity is applied since it is up in priority.

![20191126224937.png](https://i.loli.net/2019/11/27/PnBJ2zAtTqKh3f7.png)

## Evaluation upon this design using [Instrumental Interaction](https://www.lri.fr/~mbl/papers/CHI2000/paper.pdf) design principals

### Reification

The actions of “set style” for an object was made into a “style sheet” tool. These actions can be preserved in a StyleBox, that is, maintained. When selecting an object, its connected styles appear.

### Polymorphism:

Polymorphism is fulfilled because it can be applied to different shapes, text or other objects that have style characteristics.

### Reuse:

*Input Reuse:* The style sheets are easily applied to all other objects by dragging a line on to them.

_Output Reuse:_ The manipulated object can easily be further manipulated after applying the styles on it.

### Substrates:

The Substrate is the StyleBox, these items in the Theme list as shown in above pictures.

### Discovery:

The system proposed is discoverable. The style sheets appear when selecting an object. The dots that appear on the different styles make it understandable that there is something that can be dragged and where to drag. It acts also as a signifier. But to help users use it, some visual illustration might be needed.

### Appropriability:

This can also be used in the text editing field because the core idea is you can group all attributes that you want to apply as a package. You can also group text font, text color as a package to reduce the repetitive work.

### Expressivity:

The tool is expressive, because everyone can create his own set of personal styles. Saving them as presets and reusing them in other projects creates a very unique signature.
