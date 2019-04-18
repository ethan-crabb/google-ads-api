module.exports = {
    name: 'LanguageConstant',
    object: {
        targetable: { _type: 'boolean', _description: 'Whether the language is targetable.' },
        id: { _type: 'int64', _description: 'The ID of the language constant.' },
        resource_name: {
            _type: 'string',
            _description:
                'The resource name of the language constant.\nLanguage constant resource names have the form:\n\n`languageConstants/{criterion_id}`',
        },
        name: {
            _type: 'string',
            _description: 'The full name of the language in English, e.g., "English (US)", "Spanish",\netc.',
        },
        code: { _type: 'string', _description: 'The language code, e.g. "en_US", "en_AU", "es", "fr", etc.' },
    },
    methods: ['get', 'list'],
}
