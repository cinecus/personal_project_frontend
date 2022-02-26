import React from 'react'
import styled from 'styled-components'

class CSSBattle {
    constructor(html, css) {
        this.html = html
        this.css = css
    }
    renderHTML() {
        const CardImage = this.css
        return (<CardImage>
            {this.html}
        </CardImage>)
    }
}

export default CSSBattle