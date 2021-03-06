/**
 * Select Class - Inherits from Element
 */
window.Select = class Select extends Element {

    /**
     * Create an instance of Select
     * @param { object } questionData - contains necessary data to create the select options
     */
    constructor(questionData) {
        super({ tag: 'select' });
        this.questionData = questionData;
    }

    /**
     * Build select markup
     */
    toHTML() {
        // Create the select
        super.toHTML();

        // Create the first option (question text)
        let option = new Element({
            tag: 'option',
            attributes: {
                disabled: 'disabled',
                selected: 'selected'
            },
            textNode: `Choose your ${this.questionData.questionLabel}...`
        });

        this.element.appendChild(option.toHTML());

        // Create the other options (question choices)
        this.questionData.choices.forEach((choice) => {
            option = new Element({
                tag: 'option',
                attributes: { value: choice },
                textNode: choice.charAt(0).toUpperCase() + choice.slice(1)
            });

            this.element.appendChild(option.toHTML());
        });

        return this.element;
    }
};
