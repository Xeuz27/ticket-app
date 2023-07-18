import { useContext, useEffect } from 'react'
import { UiContext } from '../context/UiContext'

const useHideMEnu = (ocultar) => {
    const {showMenu, hideMenu} = useContext(UiContext)
    useEffect(() => {
      ocultar ? (
        hideMenu()
      ) : (
        showMenu()
      )
    }, [ocultar, hideMenu, showMenu])
}

export default useHideMEnu