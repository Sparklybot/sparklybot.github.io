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
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        }
    },
    variants: {}
};
