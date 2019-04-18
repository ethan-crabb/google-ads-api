module.exports = {
    name: 'AdGroupAdLabel',
    object: {
        label: { _type: 'string', _description: 'The label assigned to the ad group ad.' },
        ad_group_ad: { _type: 'string', _description: 'The ad group ad to which the label is attached.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group ad label.\nAd group ad label resource names have the form:\n`customers/{customer_id}/adGroupAdLabels/{ad_group_id}~{ad_id}~{label_id}`',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
