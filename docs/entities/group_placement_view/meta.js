module.exports = {
    name: 'GroupPlacementView',
    object: {
        placement: {
            _type: 'string',
            _description:
                'The automatic placement string at group level, e. g. web domain, mobile\napp ID, or a YouTube channel ID.',
        },
        target_url: {
            _type: 'string',
            _description:
                'URL of the group placement, e.g. domain, link to the mobile application in\napp store, or a YouTube channel URL.',
        },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the group placement view.\nGroup placement view resource names have the form:\n\n\n`customers/{customer_id}/groupPlacementViews/{ad_group_id}~{base64_placement}`',
        },
        placement_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'WEBSITE', description: "Websites(e.g. 'www.flowers4sale.com')." },
                { s: 'MOBILE_APP_CATEGORY', description: "Mobile application categories(e.g. 'Games')." },
                {
                    s: 'MOBILE_APPLICATION',
                    description: "mobile applications(e.g. 'mobileapp::2-com.whatsthewordanswers').",
                },
                { s: 'YOUTUBE_VIDEO', description: "YouTube videos(e.g. 'youtube.com/video/wtLJPvx7-ys')." },
                { s: 'YOUTUBE_CHANNEL', description: "YouTube channels(e.g. 'youtube.com::L8ZULXASCc1I_oaOT0NaOQ')." },
            ],
            _description: 'Type of the placement, e.g. Website, YouTube Channel, Mobile Application.',
        },
        display_name: {
            _type: 'string',
            _description: 'Domain name for websites and YouTube channel name for YouTube channels.',
        },
    },
    methods: ['get', 'list'],
}
