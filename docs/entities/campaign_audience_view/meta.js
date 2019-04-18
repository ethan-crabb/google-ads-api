module.exports = {
    name: 'CampaignAudienceView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the campaign audience view.\nCampaign audience view resource names have the form:\n\n\n`customers/{customer_id}/campaignAudienceViews/{campaign_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
