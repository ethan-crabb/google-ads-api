module.exports = {
    name: 'HotelPerformanceView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the hotel performance view.\nHotel performance view resource names have the form:\n\n`customers/{customer_id}/hotelPerformanceView`',
        },
    },
    methods: ['get', 'list'],
}
