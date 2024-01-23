import { redQuery } from '@/core/req-query/red-query.lib'

export class TransactionsService {
	#BASE_URL = '/transactions'

	getAll(onSuccess) {
		return redQuery({
			path:
				this.#BASE_URL +
				`?${new URLSearchParams({
					orderBy: 'desc'
				})}`,
			onSuccess
		})
	}
}
