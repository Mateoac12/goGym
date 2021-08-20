const ICON_PATH = 'icons'

export const ICON_LIST = {
  menu: 'menu',
  close: 'close',
}

// TODO: excepcion en caso de que no encuentre el icon pasado por prop
export const getIcon = (type) => `${ICON_PATH}/${ICON_LIST[type]}.svg`
