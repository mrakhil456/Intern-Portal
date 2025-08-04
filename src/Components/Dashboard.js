import React from 'react'

function Dashboard (props) {
      function copyReferralCode() {
            const referralCode = document.getElementById('referral-code').innerText;
            navigator.clipboard.writeText(referralCode).then(() => {
                alert('Referral code copied to clipboard!');
            });
        }
         function loadDashboardData() {
            // Example data - in reality you would fetch this
            const internData = {
                name: "Tony Stark",
                referralCode: "INTERN-TS-2025 ",
                totalDonations: 4250,
                weeklyChange: 320,
                goalProgress: 65,
                rewards: [
                    { name: "Starter Pack", unlocked: true, threshold: 500 },
                    { name: "Bronze Badge", unlocked: true, threshold: 1500 },
                    { name: "Silver Badge", unlocked: true, threshold: 3000 },
                    { name: "Gold Badge", unlocked: false, threshold: 5000 },
                    { name: "Executive Lunch", unlocked: false, threshold: 7500 }
                ]
            };
            
            // Update the UI with the data
            document.getElementById('intern-name').textContent = internData.name;
            document.getElementById('referral-code').textContent = internData.referralCode;
            document.getElementById('total-donations').textContent = internData.totalDonations.toLocaleString();
        }
        
        // Load data when page loads
        window.onload = loadDashboardData;
  return (
    <> 
    
    <div  > 
    <div className="dashboard-header" style={{backgroundColor:props.mode==='dark'?' #234747ff':' #87CEEB' , color:props.mode==='dark'?'white':'black'}}>
        <div className="container"style={{  color:props.mode==='dark'?'white':'black'}}>
            <div className="row align-items-center">
                <div className="col-md-8" style={{  color:props.mode==='dark'?'white':'black'}}>
     
                    <h1>Welcome back, <span id="intern-name">Tony Stark</span>!</h1>
                    <p className="lead">Track your referrals and unlock rewards</p>
                </div>
                <div className="col-md-4 text-md-end">
                    <div className="profile-pic bg-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '80px', height: '80px', outline:'black'}}>
                        <span className="fs-3 text-primary">AJ</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container" >
        <div className="row">
           
            <div className="col-md-6">
                <div className="card"style={{backgroundColor:props.mode==='dark'?'#020f3c31':'#1d9fb3c8' , color:props.mode==='dark'?'white':'black'}}>
                    <div className="card-body">
                        <h5 className="card-title">Your Referral Code</h5>
                        <p className="card-text">Share this code with friends to track your referrals</p>
                        <div className="referral-code mb-3" id="referral-code" style={{  color:props.mode==='dark'?'black':'black'}}>INTERN-TS-2025</div>
                        <button className="btn btn-copy" onClick={copyReferralCode}style={{ color:props.mode==='dark'?'white':'black'}}>
                            <i className="bi bi-clipboard"></i> Copy Code
                        </button>
                        <div className="mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
                             <p>Referral this month:8</p>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="col-md-6">
                <div className="card"style={{backgroundColor:props.mode==='dark'?'#020f3c31':'#1d9fb3c8' , color:props.mode==='dark'?'white':'black'}}>
                    <div className="card-body">
                        <h5 className="card-title">Donations Raised</h5>
                        <h2 className="mt-3">$<span id="total-donations">4,250</span></h2>
                        <p className="text-success">+$320 this week</p>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '65%', ariaValuenow:'65', ariaValuemin:'0', ariaValuemax:'100'}}></div>
                        </div>
                        <p className="mt-2"><small>65% of quarterly goal ($6,500)</small></p>
                    </div>
                </div>
            </div>
        </div>

      
        <div className="row mt-4">
            <div className="col-12">
                <div className="card" style={{backgroundColor:props.mode==='dark'?'#f5feff':'#bbe4e9' , color:props.mode==='dark'?'black':'black'}}>
                    <div className="card-body">
                        <h5 className="card-title">Your Rewards</h5>
                        <p className="card-subtitle mb-3 text-muted" >Unlock these rewards by reaching donation milestones</p>
                        
                        <div className="reward-item">
                            <div className="reward-icon"><i className="bi bi-gift-fill"></i></div>
                            <div className="reward-details flex-grow-1">
                                <h6>Starter Pack</h6>
                                <p className="mb-0 text-muted">Reach $500 in donations</p>
                            </div>
                            <div className="reward-status">
                                <span className="badge bg-success">Unlocked</span>
                            </div>
                        </div>
                        
                        <div className="reward-item">
                            <div className="reward-icon"><i className="bi bi-award-fill"></i></div>
                            <div className="reward-details flex-grow-1">
                                <h6>Bronze Badge</h6>
                                <p className="mb-0 text-muted">Reach $1,500 in donations</p>
                            </div>
                            <div className="reward-status">
                                <span className="badge bg-success">Unlocked</span>
                            </div>
                        </div>
                        
                        <div className="reward-item">
                            <div className="reward-icon"><i className="bi bi-star-fill"></i></div>
                            <div className="reward-details flex-grow-1">
                                <h6>Silver Badge</h6>
                                <p className="mb-0 text-muted">Reach $3,000 in donations</p>
                            </div>
                            <div className="reward-status">
                                <span className="badge bg-success">Unlocked</span>
                            </div>
                        </div>
                        
                        <div className="reward-item reward-locked">
                            <div className="reward-icon"><i className="bi bi-trophy-fill"></i></div>
                            <div className="reward-details flex-grow-1">
                                <h6>Gold Badge</h6>
                                <p className="mb-0 text-muted">Reach $5,000 in donations</p>
                            </div>
                            <div className="reward-status">
                                <span className="badge bg-secondary">Locked</span>
                            </div>
                        </div>
                        
                        <div className="reward-item reward-locked">
                            <div className="reward-icon"><i className="bi bi-emoji-smile-fill"></i></div>
                            <div className="reward-details flex-grow-1">
                                <h6>Executive Lunch</h6>
                                <p className="mb-0 text-muted">Reach $7,500 in donations</p>
                            </div>
                            <div className="reward-status">
                                <span className="badge bg-secondary">Locked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
     
  </div>
  </>
)
}

export default Dashboard