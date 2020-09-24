import { Request, Response } from 'express';
import { NextFunction } from 'connect';
import i18next from 'i18next'

class Translation {
	constructor(){
		i18next.init({
			lng: 'en',
			debug: false,
			resources: {
				en: {
					translation: {
						"invalid_header": `Invalid header. please try again`
					}
				}
			}
		})
	}

	lang(lang: string){
		return i18next.t(lang)
	}
}

const translation = new Translation()

export default translation.lang