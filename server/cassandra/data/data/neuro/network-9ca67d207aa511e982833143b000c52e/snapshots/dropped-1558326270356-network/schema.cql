CREATE TABLE IF NOT EXISTS neuro.network (
	network_id uuid PRIMARY KEY,
	es_options text,
	es_query text,
	score int,
	layers set<frozen<layer>>)
	WITH ID = 9ca67d20-7aa5-11e9-8283-3143b000c52e
	AND bloom_filter_fp_chance = 0.01
	AND dclocal_read_repair_chance = 0.1
	AND crc_check_chance = 1.0
	AND default_time_to_live = 0
	AND gc_grace_seconds = 864000
	AND min_index_interval = 128
	AND max_index_interval = 2048
	AND memtable_flush_period_in_ms = 0
	AND read_repair_chance = 0.0
	AND speculative_retry = '99PERCENTILE'
	AND comment = ''
	AND caching = { 'keys': 'ALL', 'rows_per_partition': 'NONE' }
	AND compaction = { 'max_threshold': '32', 'min_threshold': '4', 'class': 'org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy' }
	AND compression = { 'chunk_length_in_kb': '64', 'class': 'org.apache.cassandra.io.compress.LZ4Compressor' }
	AND cdc = false
	AND extensions = { 'elastic_admin/neuro': '3a290a05fa846e6575726ffa8676657273696f6ec2847374617465436f70656e8773657474696e6773fa92696e6465782e6372656174696f6e5f646174654c3135353833313937353533303892696e6465782e70726f76696465645f6e616d65446e6575726f89696e6465782e75756964554652644e6659734d5237365259596c344b3777735f7794696e6465782e76657273696f6e2e637265617465644636303230333939fb876d617070696e6773f8fa866e6574776f726bfa8970726f70657274696573fa856c6179657273fa8374797065456e65737465648d63716c5f636f6c6c656374696f6e427365748b63716c5f7564745f6e616d65446c617965724afa816964fa4c46696e74656765724d4873696e676c65746f6efb866e6575726f6e73fa4c456e65737465644d427365744e456e6575726f6e4afa8476616c7565fa4c44666c6f61744d4873696e676c65746f6efb8677656967687473fa4c44666c6f61744d42736574fbfbfbfbfb896e6574776f726b5f6964fa4c466b6579776f72644d4873696e676c65746f6e9063716c5f706172746974696f6e5f6b6579239463716c5f7072696d6172795f6b65795f6f72646572c0fb8473636f7265fa4c46696e74656765724d4873696e676c65746f6efbfbfbfbf986616c6961736573fafbfbfb' };
CREATE CUSTOM INDEX elastic_network_idx ON neuro.network () USING 'org.elassandra.index.ExtendedElasticSecondaryIndex';
