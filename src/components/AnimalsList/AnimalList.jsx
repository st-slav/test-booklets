import React from 'react'
import PropTypes from 'prop-types'
import { NavLink  } from 'react-router-dom'
import styled from 'styled-components'

const AnimalsListLi = styled.li`
  padding: 10px 15px;
`

export const AnimalsList = ({ animals = [] }) => (
  <ul>
    {animals.map(({ label, link }) => (<AnimalsListLi><NavLink  to={link}>{label}</NavLink ></AnimalsListLi>))}
  </ul>
)

AnimalsList.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, link: PropTypes.string }))
}