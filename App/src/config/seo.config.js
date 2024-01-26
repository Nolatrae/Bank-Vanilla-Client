const SITE_NAME = 'NOLA Bank - Vanilla JS'

export const getTitle = title => {
	return title ? `${title} | ${SITE_NAME}` : SITE_NAME
}
