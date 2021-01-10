Vue.component('plan', {
	template: `
		<div class="plan">
			<div class="description">
				<span class="title">{{name}}</span>
			</div>
		</div>`,
	props: {
		name: {
			type: String,
			required: true
		},
	},
})

new Vue({
	el: '#app',
	data: {
		plans: ['The Single', 'The Curious', 'The Addict'],
	}
})