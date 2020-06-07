module.exports = {
    purge: [
        '_includes/*.html',
        '_includes/*.md',
        '_layouts/*.html',
        '_layouts/*.md',
        '_posts/*.md',
        'js/*.js',
        '*.html',
        '*.md'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#226699',
                secondary: '#55acee',
                tertiary: '#ffcc4d',
                less_tertiary: '#ffdb82',
                dark: '#2b303a',
                light: '#f5f8fa',
                less_light: '#dcdfe1',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            }
        },
        fontFamily: {
            title: ['Lora'],
            regular: ['Open Sans']
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui'),
    ]
};
