import {useState,useEffect} from "react";
import axios from 'axios';
import Loader from "./Loader.js";
import HomeCards from "./HomeCards";

const Home = () => {
	
	const [basicUsersData, setBasicUsersData] = useState({});
	const [loading,setloading] = useState(true);
	
	const computeProUsers = (locationData, usersData) => {
		let mp=0,fp=0,mnp=0,fnp=0,mmp=0,fmp=0,mmnp=0,fmnp=0;
		
		usersData?.forEach((user) => {
			if(user.is_pro_user){
				if(user.gender==="M"){
					mp++;
					mmp+=user.total_matches;
				}
				else {
					fp++;
					fmp+=user.total_matches;
				}
			}
			else if(!user.is_pro_user){
				if(user.gender==="M"){
					mnp++;
					mmnp+=user.total_matches;
				}
				else {
					fnp++;
					fmnp+=user.total_matches;
				}
			}
		})
		
		const data = {};
		data["totalUsers"]= usersData.length;
		data["maleUsers"]= mp + mnp
		data["femaleUsers"]= fp + fnp
		data["proMaleUsers"]= mp
		data["proFemaleUsers"]= fp
		data["avgMaleMatch"]= ((mmp+mmnp)/(mp+mnp)).toFixed(2)
		data["avgFemaleMatch"]= ((fmp+fmnp)/(fp+fnp)).toFixed(2)
		data["avgProMaleMatch"]= (mmp/mp).toFixed(2)
		data["avgProFemaleMatch"]= (fmp/fp).toFixed(2)
		
		setBasicUsersData(data);
		
		setloading(false);
	}
	
	useEffect(() => {
		document.title = "Home";
		
		async function setupMap() {
			let values = await Promise.all([
				axios.get('https://kyupid-api.vercel.app/api/areas'), 
				axios.get('https://kyupid-api.vercel.app/api/users')
			]);
			
			computeProUsers(values[0]?.data, values[1]?.data?.users)
		}
		
		setupMap();
		
	},[]);
	
  return (
    <div className="cards">
	{
		loading 
		?
		<Loader />
		:
		<>
			<h2><b>Welcome To Kyupid Dashboard!!</b></h2>
			<h5><u>Here are few stats about our users:</u></h5>
			<HomeCards basicUsersData={basicUsersData} />
		</>
	}
	</div>
  );
}

export default Home