import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Star from './Star'

const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    margin-top: 100px;
`

const FooterText = styled.p`
    color: #667eea;
    font-size: 15px;
`

const PostFooter = props => {
    return (
        <FooterContainer>
            <FooterText>Liked it? Give it a star (or 2, or 12)</FooterText>
            <Star starVal={10}/>
        </FooterContainer>
    )
}

PostFooter.propTypes = {

}

export default PostFooter
