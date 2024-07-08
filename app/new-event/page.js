import React from "react";

const page = () => {
	return (
		<>
			<section className='flex items-center justify-center py-10 lg:p-0 lg:h-screen'>
				<form className='space-y-8'>
					<div className='grid gap-4 md:grid-cols-2'>
						<div>
							<label>Event Name</label>
							<input
								type='text'
								name='event-name'
								id='event-name'
								required
								placeholder='Enter Your Name'
							/>
						</div>
						<div>
							<label>Event Date</label>
							<input
								type='date'
								name='event-Date'
								id='event-Date'
								required
								placeholder='Enter Your Date'
							/>
						</div>
					</div>
					<div>
						<label>Event Description</label>
						<textarea className="bg-neutral-900 border-2 rounded-lg font-semibold"
							name='event-description'
							id='event-desc'
							cols='55'
							rows='6'
							placeholder='Please write your event description...'
						></textarea>
					</div>

					<div className='grid gap-4 md:grid-cols-2'>
						<div>
							<label>Event Location</label>
							<input
								type='text'
								name='event-location'
								id='event-location'
								required
								placeholder='What is the location of event...?'
							/>
						</div>
						<div>
							<label>Event Organizer</label>
							<input
								type='text'
								name='event-organizer'
								id='event-organizer'
								required
								placeholder='Who is the Organizer of event...?'
							/>
						</div>
					</div>
					<button
						type='submit'
						className='bg-white py-3 px-6 rounded-lg w-full outline-none text-neutral-900 font-semibold hover:animate-pulse'
					>
						Create an Event
					</button>
				</form>
			</section>
		</>
	);
};

export default page;
