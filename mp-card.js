import PfeCard from "https://unpkg.com/@patternfly/pfe-card/dist/pfe-card?module";
import "https://unpkg.com/@patternfly/pfe-cta/dist/pfe-cta?module";

class MpCard extends PfeCard {
    // haxProperty definition
    static get haxProperties() {
        return {
            canScale: false,
            canPosition: false,
            canEditSource: true,
            gizmo: {
                title: "PFE Card",
                description: "Simple card in a cool retro design",
                icon: "icons:android",
                color: "purple",
                groups: ["Card"],
                meta: {
                    author: "ELMS:LN",
                    owner: "The Pennsylvania State University",
                },
            },
            settings: {
                configure: [
                    {
                        slot: "pfe-card--header",
                        title: "Title",
                        description: "Main title of card",
                        inputMethod: "textfield",
                        required: false,
                    },
                    {
                        slot: "",
                        title: "Content",
                        description: "Content",
                        inputMethod: "code-editor",
                        required: false,
                    },
                    {
                        slot: "pfe-card--footer",
                        title: "Footer",
                        description: "Footer",
                        inputMethod: "code-editor",
                        required: false,
                    },
                    {
                        property: "color",
                        title: "Color",
                        inputMethod: "select",
                        options: {
                            base: "base",
                            lighter: "lighter",
                            darker: "darker",
                        },
                    },
                ],
                advanced: [],
            },
            demoSchema: [
                {
                    tag: "mp-card",
                    properties: {
                        color: "base"
                    },
                    content: `
                    <h2 slot="pfe-card--header">Lighter card (deprecated)</h2>
                    <p>This is the lightest pfe-card and <a href="#">a link</a>, and <a href=".">a visited link</a>.</p>
                    <div class="button-series" slot="pfe-card--footer">
                        <pfe-cta priority="secondary">
                        <a href="#">Try</a>
                        </pfe-cta>
                        <pfe-cta priority="primary">
                            <a href="#">Buy</a>
                        </pfe-cta>
                    </div>
            `,
                },
            ],
            saveOptions: {
                unsetAttributes: ["pfelement", "type", "has_body", "has_header", "has_footer"],
            },
        };
    }
}

customElements.define("mp-card", MpCard);