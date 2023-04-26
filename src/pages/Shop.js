import React from 'react'
import ShopComponent from '../components/shopComponent'
import { useState } from 'react'
const Shop = () => {
    const [state, setState] = useState({
        color: {}
    })
    const onChange2 = () => {
        setState({
            color: {
                s2: 'var(--primary-color)',
            }
        })
    }
    const onChange7 = () => {
        setState({
            color: {
                s7: 'var(--primary-color)',
            }
        })
    }
    const onChange3 = () => {
        setState({
            color: {
                s3: 'var(--primary-color)',
            }
        })
    }
    const onChange4 = () => {
        setState({
            color: {
                s4:'var(--primary-color)'
            }})}
    const onChange5 = () => {
        setState({
            color: {
                s5:'var(--primary-color)'

            }
        })
    }
    const onChange6 = () => {
        setState({
            color: {
                s6:'var(--primary-color)'
            }})}
    const onChange1 = () => {
        setState({
            color: {
                s1:'var(--primary-color)'}
        })
    }
    return (
        <ShopComponent
            color1={state.color.s1}
            color2={state.color.s2}
            color3={state.color.s3}
            color4={state.color.s4}
            color5={state.color.s5}
            color6={state.color.s6}
            color7={state.color.s7}
            onChange1={onChange1}
            onChange2={onChange2}
            onChange3={onChange3}
            onChange4={onChange4}
            onChange5={onChange5}
            onChange6={onChange6}
            onChange7={onChange7}
        />
    )
}

export default Shop