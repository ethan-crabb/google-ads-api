module.exports = {
    name: 'AgeRangeView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the age range view.\nAge range view resource names have the form:\n\n`customers/{customer_id}/ageRangeViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
