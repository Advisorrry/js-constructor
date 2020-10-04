import {row, col, css} from './utils'

export function title(block) {
    const {tag = 'h1', styles} = block.options

    return row(col(`<${tag}>${block.value}</${tag}>`), css(styles))
}

export function text(block) {
    return row(col(`<p>${block.value}</p>`))
}

export function columns(block) {

    const html = block.value.map(col).join('')
    return row(`${html}`)
}

export function image(block) {
    return row(`<img src='${block.value}' alt="">`)

}

export const templates = {
    title,
    text,
    image,
    columns
}