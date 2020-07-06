import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {IGallery} from "../Props/IGallery";
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 500,
            height: 450,
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        titleBar: {
            background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export function Gallery({tileData}: IGallery): any {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} spacing={1} cols={4}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.key} cols={tile.featured ? 4 : 1} rows={tile.featured ? 1 : 1}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            titlePosition="top"
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                                    <StarBorderIcon/>
                                </IconButton>
                            }
                            actionPosition="left"
                            className={classes.titleBar}
                        />
                        <GridListTileBar
                            title={tile.title2}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
