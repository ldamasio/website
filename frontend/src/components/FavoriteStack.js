
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
    'Apache Lucene',
    'Apache Solr'
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
      <h4>Favorite Stack:</h4>            
      <p>
        <h6>Web Development</h6>
        <ul>
          { tools_webdev.map( (tool_webdev) => <li>{ tool_webdev }</li>) }
        </ul>
      </p>
      <p>
        <h6>Data Storage</h6>
        <ul>
          { tools_database.map( (tool_database) => <li>{ tool_database }</li>) }
        </ul>
      </p>
      <p>
        <h6>Queues</h6>
        <ul>
          { tools_queues.map( (tool_queues) => <li>{ tool_queues }</li>) }
        </ul>
      </p>
      <p>
        <h6>Data Warehousing</h6>
        <ul>
          { tools_datawarehousing.map( (tool_datawarehousing) => <li>{ tool_datawarehousing }</li>) }
        </ul>
      </p>
      <p>
        <h6>Deep Storage</h6>
        <ul>
          { tools_deepstorage.map( (tools_deepstorage) => <li>{ tools_deepstorage }</li>) }
        </ul>
      </p>
      <p>
        <h6>DevOps</h6>
        <ul>
          { tools_devops.map( (tool_devops) => <li>{ tool_devops }</li>) }
        </ul>
      </p>
    </div>
  )
}

export default FavoriteStack
