import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import { Field } from '@/components/ui/field/field.component'

import { UserItem } from '@/components/ui/user-item/user-item.component'
import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'mwerg',
					placeholder: 'Enter email',
					variant: 'green'
				}),
				new UserItem(
					{
						avatarPath:
							'https://avatars.mds.yandex.net/i?id=0976eca1c1d31153e1067dcd43fd24ed8cadbc30-9855166-images-thumbs&n=13',
						name: 'Egor'
					},
					false,
					() => alert('hey')
				)
			],
			styles
		)

		$R(element).find('h1').css('color', 'green')

		return element
	}
}
