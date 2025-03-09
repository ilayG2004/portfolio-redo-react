import { Avatar, Card, Carousel } from 'antd';

const projectcards = () => {
    const cards = [
      { title: "Spark! Bytes", description: "This is the first card." },
      { title: "Boston City Budget Analysis", description: "This is the second card." },
      { title: "AI Pokemon Trainer", description: "This is the third card." },
      { title: "Card 4", description: "This is the fourth card." },
    ];
  
    return (
      <Carousel autoplay dotPosition="bottom">
        {cards.map((card, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={process.env.PUBLIC_URL + '/images/projects/sparkbyteslogo.png'} />}
            >
              <Card.Meta title={card.title} description={card.description} />
            </Card>
          </div>
        ))}
      </Carousel>
    );
};

/** <Card style={{width:200, height: 200}}>
      <Carousel autoplay>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/projects/sparkbyteslogo.png'}/>
        </div>
        <div>
          <p>Spark! Bytes was a prototype app designed to help bring together Boston University students around something they all love -- food. Community leaders could post invites to events with descriptions, photos, tags, locations to appeal to a wider audience of BU students. Whether it was for the actual meeting, or for the take-home after the fact, the goal of this webapp was to reduce food waste by notifying BU students of these events. Attached is a frontend & backend demonstration of my team's project for Spark! Bytes.</p>
        </div>
      </Carousel>
    </Card>
    <Card style={{width:200, height: 200}}>
      <Carousel autoplay>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/projects/sparkbyteslogo.png'}/>
        </div>
        <div>
          <p>The City of Boston's budget includes an operating budget and a capital budget. The operating budget handles day-to-day expenses including public employees and services, while the capital budget is more focused on improving currently owned assets. To optimize the allocation of resources for these budgets, it is crucial to understand how Boston's money is being spent. Through collaboration with the Citywide Analytics Team, Boston's central data organization, this project analyzes how Boston spends its annual budget and how it may change over time. Myself and two other peers collaborated to visualize and make predictions on the city's +$4.7-billion budget data. </p>
        </div>
      </Carousel>
    </Card>
    </div>*/
export default projectcards;