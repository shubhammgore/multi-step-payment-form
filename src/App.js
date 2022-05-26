import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Account from './components/steps/Account';

function App() {
	const steps = ['Account Information', 'Personal Details', 'Complete'];

	const diplaySteps = (step) => {
		switch (step) {
			case 1:
				return <Account />;

			default:
				break;
		}
	};

	return (
		<div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
			{/* Stepper */}
			<div className='container horizontal mt-5'>
				<Stepper />
			</div>

			{/* Navigation controls */}
			<StepperControl />
		</div>
	);
}

export default App;
