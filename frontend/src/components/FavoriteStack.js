function FavoriteStack() {

  const tools_webdev = [
    'Django',
    'FastAPI',
    'NodeJS',
    'ReactJS'
  ];

  const tools_database = [
    'PostgreSQL',
    'MongoDB',
    'MySQL'
  ];

  const tools_queues = [
    'Redis',
    'RabbitMQ',
    'Apache Kafka'
  ];

  const tools_datawarehousing = [
    'Apache Nifi',
    'Apache Druid',
    'Apache Superset',
  ];

  const tools_deepstorage = [
    'Apache Hadoop',
    'Apache Spark',
    'Apache Hive'
  ];

  const tools_devops = [
    'Docker',
    'Docker-compose',
    'Kubernetes',
    'Github Actions'
  ];

  return (
    <div>
      <h2>Favorite Stack</h2>            
      <p>
        <h4>Web Development</h4>
        <ul>
          { tools_webdev.map( (tool_webdev) => <li>{ tool_webdev }</li>) }
        </ul>
      </p>
      <p>
        <h4>Data Storage</h4>
        <ul>
          { tools_database.map( (tool_database) => <li>{ tool_database }</li>) }
        </ul>
      </p>
      <p>
        <h4>Queues</h4>
        <ul>
          { tools_queues.map( (tool_queues) => <li>{ tool_queues }</li>) }
        </ul>
      </p>
      <p>
        <h4>Data Warehousing</h4>
        <ul>
          { tools_datawarehousing.map( (tool_datawarehousing) => <li>{ tool_datawarehousing }</li>) }
        </ul>
      </p>
      <p>
        <h4>Deep Stoage</h4>
        <ul>
          { tools_deepstorage.map( (tools_deepstorage) => <li>{ tools_deepstorage }</li>) }
        </ul>
      </p>
      <p>
        <h4>DevOps</h4>
        <ul>
          { tools_devops.map( (tool_devops) => <li>{ tool_devops }</li>) }
        </ul>
      </p>
    </div>
  )
}

export default FavoriteStack
