import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const HomeCards = ({basicUsersData}) => {
	return(
	<>
	<CardDeck style={{margin:"2em"}}>
		  <Card border="primary">
			<Card.Body>
			  <Card.Title>Total Users</Card.Title>
			  <Card.Text>
				{basicUsersData.totalUsers}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="secondary">
			<Card.Body>
			  <Card.Title>Male Users</Card.Title>
			  <Card.Text>
				{basicUsersData.maleUsers}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="success">
			<Card.Body>
			  <Card.Title>Female Users</Card.Title>
			  <Card.Text>
				{basicUsersData.femaleUsers}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="danger">
			<Card.Body>
			  <Card.Title>Pro Male Users</Card.Title>
			  <Card.Text>
				{basicUsersData.proMaleUsers}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="warning">
			<Card.Body>
			  <Card.Title>Pro Female Users </Card.Title>
			  <Card.Text>
				{basicUsersData.proFemaleUsers}
			  </Card.Text>
			</Card.Body>
		  </Card>
		</CardDeck>
		
		<CardDeck style={{margin:"2em"}}>
		  <Card border="primary">
			<Card.Body>
			  <Card.Title>Average Matches: Male</Card.Title>
			  <Card.Text>
				{basicUsersData.avgMaleMatch}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="secondary">
			<Card.Body>
			  <Card.Title>Average Matches: Female</Card.Title>
			  <Card.Text>
				{basicUsersData.avgFemaleMatch}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="success">
			<Card.Body>
			  <Card.Title>Average Matches: Pro Male</Card.Title>
			  <Card.Text>
				{basicUsersData.avgProMaleMatch}
			  </Card.Text>
			</Card.Body>
		  </Card>
		  <Card border="danger">
			<Card.Body>
			  <Card.Title>Average Matches: Pro Female</Card.Title>
			  <Card.Text>
				{basicUsersData.avgProFemaleMatch}
			  </Card.Text>
			</Card.Body>
		  </Card>
		</CardDeck>
	</>
)}


export default HomeCards;