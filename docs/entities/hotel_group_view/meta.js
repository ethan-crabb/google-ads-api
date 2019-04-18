module.exports = {
    name: 'HotelGroupView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the hotel group view.\nHotel Group view resource names have the form:\n\n`customers/{customer_id}/hotelGroupViews/{ad_group_id}~{criterion_id}`',
        },
    },
    methods: ['get', 'list'],
}
