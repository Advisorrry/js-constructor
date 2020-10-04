import image from './assets/img.jpg'

export const model = [
    {type: 'title', value: 'Конструктор сайтов на JS', options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
            }
        }},
    {type: 'text', value: 'Here we go'},
    {type: 'columns', value: [
            '11111111111111',
            '11111111111111',
            '11111111111111'
        ]},
    {type: 'image', value: image}
]
