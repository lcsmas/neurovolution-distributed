CREATE TABLE IF NOT EXISTS network.docs (
	"_id" text PRIMARY KEY)
	WITH ID = 4082cff0-799a-11e9-a804-8774e0400178
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
	AND extensions = { 'elastic_admin/network': '3a290a05fa866e6574776f726bfa8676657273696f6ec2847374617465436f70656e8773657474696e6773fa92696e6465782e6372656174696f6e5f646174654c3135353832303339303233383192696e6465782e70726f76696465645f6e616d65466e6574776f726b89696e6465782e757569645577694c613343766d5268717938616d38426c6733585194696e6465782e76657273696f6e2e637265617465644636303230333939fb876d617070696e6773f8fa83646f6373fafbfbf986616c6961736573fafbfbfb' };
CREATE CUSTOM INDEX elastic_docs_idx ON network.docs () USING 'org.elassandra.index.ExtendedElasticSecondaryIndex';
