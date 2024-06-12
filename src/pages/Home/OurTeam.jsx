


const OurTeam = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold text-blue-400">Our Team</h1>
        <h1 className="text-2xl font-bold">Meet our specialists</h1>
        <p>This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</p>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/7bpRt0S/photo1.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="card-title">Hattie McKenzie</h2>
            <p>Montreal, QC</p>
          </div>
          <div className="card-actions justify-around">
            <div>
              <button className="text-blue-400 text-xl font-bold">323</button> <br />
              <span>Patients</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">500+</button> <br />
              <span>Hours</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">24/7</button> <br />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/mDV4H5x/photo2.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="card-title">Annie Spratt</h2>
            <p>Bucharest, RO</p>
          </div>
          <div className="card-actions justify-around">
            <div>
              <button className="text-blue-400 text-xl font-bold">450</button> <br />
              <span>Patients</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">400+</button> <br />
              <span>Hours</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">24/7</button> <br />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 card card-compact bg-base-100 shadow-xl">
        <figure><img src="https://i.ibb.co/7gLFgRs/photo3.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <div className="text-center flex flex-col justify-center items-center">
            <h2 className="card-title">Bruce Mars</h2>
            <p>Atlanta, U.S.</p>
          </div>
          <div className="card-actions justify-around">
            <div>
              <button className="text-blue-400 text-xl font-bold">750</button> <br />
              <span>Patients</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">800+</button> <br />
              <span>Hours</span>
            </div>
            <div>
              <button className="text-blue-400 text-xl font-bold">24/7</button> <br />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default OurTeam;