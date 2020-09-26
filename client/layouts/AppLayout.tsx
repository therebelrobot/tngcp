import React from 'react'

import {Box, IconButton} from '@chakra-ui/core'
import {css, Global} from '@emotion/core'

import {useColorMode} from '_/utils/useColorMode'

const bgColor = {light: 'white', dark: 'rgb(26, 32, 44)'}

export const AppLayout = ({children}) => {
  // Do not put state handling here (Graphql, useState, etc.)
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Global
        styles={css`
          html,
          * {
            transition: background-color 0.2s linear, color 0.2s linear, border-color 0.2s linear,
              fill 0.2s linear;
          }
        `}
      />
      <Box position="fixed" top={0} left={0} w="100vw" h="100vh" overflow="auto">
        <Box position="fixed" right={8} top={8}>
          <IconButton
            aria-label="Toggle Theme Mode"
            icon={colorMode === 'light' ? 'moon' : 'sun'}
            onClick={() => toggleColorMode()}
          >
            {colorMode}
          </IconButton>
        </Box>
        {children}
      </Box>
    </>
  )
}
