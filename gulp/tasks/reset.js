import {deleteAsync} from 'del';

export const reset = () => {
	
	return deleteAsync(app.path.cleanDist), deleteAsync(app.path.cleanDocs)
}