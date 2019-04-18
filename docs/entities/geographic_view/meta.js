module.exports = {
    name: 'GeographicView',
    object: {
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the geographic view.\nGeographic view resource names have the form:\n\n\n`customers/{customer_id}/geographicViews/{country_criterion_id}~{location_type}`',
        },
        location_type: {
            _type: 'enum',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                { s: 'AREA_OF_INTEREST', description: 'Location the user is interested in while making the query.' },
                { s: 'LOCATION_OF_PRESENCE', description: 'Location of the user issuing the query.' },
            ],
            _description: 'Type of the geo targeting of the campaign.',
        },
        country_geo_target_constant: { _type: 'string', _description: 'CriterionId for the geo target for a country.' },
    },
    methods: ['get', 'list'],
}
