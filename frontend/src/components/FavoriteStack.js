
function FavoriteStack() {

  const tools_lang = [
    'Python',
    'Javascript',
    'Java',
    'Typescript',
    'Dart',
    'Kotlin'
  ];

  const tools_webdev = [
    'Django',
    'FastAPI',
    'NodeJS',
    'ReactJS',
    'NextJS',
    'NestJS'
  ];

  const tools_database = [
    'PostgreSQL',
    'MongoDB',
    'MySQL / MariaDB'
  ];

  const tools_querylang = [
    'SQL',
    'GraphQL',
    'XPath'
  ];

  const tools_queues = [
    'RabbitMQ',
    'Apache Kafka',
    'Redis'
  ];

  const tools_datawarehousing = [
    'Apache Nifi',
    'Apache Druid',
    'Apache Superset'
  ];

  const tools_searchengine = [
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
        <h6>Languages</h6>
        <ul>
          { tools_lang.map( (tool_lang) => <li>{ tool_lang }</li>) }
        </ul>
      </p>
      <p>
        <h6>Web Development libs & frameworks</h6>
        <ul>
          { tools_webdev.map( (tool_webdev) => <li>{ tool_webdev }</li>) }
        </ul>
      </p>
      <p>
        <h6>Database</h6>
        <ul>
          { tools_database.map( (tool_database) => <li>{ tool_database }</li>) }
        </ul>
      </p>
      <p>
        <h6>Deep Storage</h6>
        <ul>
          { tools_deepstorage.map( (tool_deepstorage) => <li>{ tool_deepstorage }</li>) }
        </ul>
      </p>
      <p>
        <h6>Query Languages</h6>
        <ul>
          { tools_querylang.map( (tool_deepstorage) => <li>{ tool_deepstorage }</li>) }
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
        <h6>Search Engine</h6>
        <ul>
          { tools_searchengine.map( (tool_searchengine) => <li>{ tool_searchengine }</li>) }
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
