let PlanComponent =  {
	template: `
		<div class="plan" v-on:click="select" :class="{'plan-active': isSelected}">
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
			<plan v-for="plan in plans" :name="plan" @select="selectPlan" :selected-plan="selectedPlan"></plan>
		</div>`,
	components: {
		plan: PlanComponent,
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

new Vue({
	el: '#app',
	components: {
		'plan-picker': PlanPickerComponent,
	}
});