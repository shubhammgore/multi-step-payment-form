import { useState } from 'react';
import { UseContextProvider } from './contexts/StepperContext';

import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';

import Account from './components/steps/Account';
import Details from './components/steps/Details';
import Final from './components/steps/Final';
import Payment from './components/steps/Payment';

function App() {
	const [currentStep, setCurrentStep] = useState(1);

	const steps = [
		'Account Information',
		'Personal Details',
		'Payment',
		'Complete',
	];

	const diplayStep = (step) => {
		switch (step) {
			case 1:
				return <Account />;
			case 2:
				return <Details />;
			case 3:
				return <Payment />;
			case 4:
				return <Final />;

			default:
		}
	};

	const handleClick = (direction) => {
		let newStep = currentStep;

		direction === 'next' ? newStep++ : newStep--;

		// check if step are within bounds
		newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
	};

	return (
		<div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
			{/* Stepper */}
			<div className='container horizontal mt-5'>
				<Stepper steps={steps} currentStep={currentStep} />

				{/* Navigation Controls */}
				<div className='my-10 p-10'>
					<UseContextProvider
					// value={{
					// 	userData,
					// 	setUserData,
					// 	finalData,
					// 	setFinalData,
					// }}
					>
						{diplayStep(currentStep)}
					</UseContextProvider>
				</div>
			</div>

			{/* Navigation controls */}
			{currentStep !== steps.length && (
				<StepperControl
					handleClick={handleClick}
					currentStep={currentStep}
					steps={steps}
				/>
			)}
		</div>
	);
}

export default App;
