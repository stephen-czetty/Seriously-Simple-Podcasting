import { registerBlockType } from '@wordpress/blocks';
import CastosPlayer from "./components/CastosPlayer";
import EditPlayer from './components/EditPlayer';
/**
 * Castos Player block
 *
 */
registerBlockType('seriously-simple-podcasting/castos-player', {

	title: 'Castos Player',

	icon: 'controls-volumeon',

	category: 'layout',

	supports: {
		multiple: false,
	},

	attributes: {
		id: {
			type: 'number',
		},
		image: {
			type: 'string',
		},
		file: {
			type: 'string',
		},
		title: {
			type: 'string',
		},
		duration: {
			type: 'string',
		},
		download: {
			type: 'string',
		},
	},

	edit: EditPlayer,

	save: (props, className) => {
		const { id, image, file, title, duration, download } = props.attributes;
		return (
			<CastosPlayer
				className={className}
				episodeImage={image}
				episodeFileUrl={file}
				episodeTitle={title}
				episodeDuration={duration}
				episodeDownloadUrl={download}
			/>
		);
	},
});
