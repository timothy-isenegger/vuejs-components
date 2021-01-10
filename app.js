let PlanPickerItemComponent =  {
	template: `
		<div class="plan-picker-item" v-on:click="select" :class="{'plan-picker-item-active': isSelected}">
			<div class="description">
				<span class="title">{{name}}</span>
			</div>
		</div>`,
	props: {
		name: {
			type: String,
			required: true
		},
		selectedPlan: {
			type: String
		}
	},
	computed: {
		isSelected() {
			return this.name === this.selectedPlan;
		}
	},
	methods: {
		select() {
			this.$emit('select', this.name);
		}
	}
};

let PlanPickerComponent = {
	template: `
		<div class="plans">
			<plan-picker-item v-for="plan in plans" :name="plan" @select="selectPlan" :selected-plan="selectedPlan"></plan-picker-item>
		</div>`,
	components: {
		'plan-picker-item': PlanPickerItemComponent,
	},
	data () {
		return {
			plans: ['The Single', 'The Curious', 'The Addict'],
			selectedPlan: null,
		}
	},
	methods: {
		selectPlan(plan) {
			this.selectedPlan = plan;
		}
	}
}

Vue.component('page-layout', {
	template: '#page-layout-template',
}) 

new Vue({
	el: '#app',
	components: {
		'plan-picker': PlanPickerComponent,
	}
});