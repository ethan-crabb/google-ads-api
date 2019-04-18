module.exports = {
    name: 'AdGroupCriterionLabel',
    object: {
        ad_group_criterion: { _type: 'string', _description: 'The ad group criterion to which the label is attached.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the ad group criterion label.\nAd group criterion label resource names have the form:\n\n`customers/{customer_id}/adGroupCriterionLabels/{ad_group_id}~{criterion_id}~{label_id}`',
        },
        label: { _type: 'string', _description: 'The label assigned to the ad group criterion.' },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
