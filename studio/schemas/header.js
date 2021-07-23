export default {
    "type": "object",
    "name": "header",
    "title": "Header Configuration",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Header Title",
            "description": "The title displayed on the left side if no logo image added. If value is not set, the author name will be used.",
            "validation": null
        },
        {
            "type": "string",
            "name": "tagline",
            "title": "Header Tagline",
            "description": "The tagline displayed on the left side",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo_img",
            "title": "Logo",
            "description": "The logo image displayed on the left side",
            "validation": null
        },
        {
            "type": "string",
            "name": "logo_img_alt",
            "title": "Logo Alt Text",
            "description": "The alt text of the logo image",
            "validation": null
        },
        {
            "type": "image",
            "name": "background_img",
            "title": "Background Image",
            "description": "The image displayed in the background of the left side",
            "validation": null
        },
        {
            "type": "boolean",
            "name": "has_nav",
            "title": "Enable Navigation Menu",
            "description": "Display the navigation menu bar on the left side",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "nav_links",
            "title": "Navigation Links",
            "description": "List of navigation links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "boolean",
            "name": "has_social",
            "title": "Enable Social Links",
            "description": "Display social links on the left side",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "array",
            "name": "social_links",
            "title": "Social Links",
            "description": "List of social links",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Object Type",
            "description": "The type of the object",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "header"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}