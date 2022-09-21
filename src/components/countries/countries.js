import Grid2 from "@mui/material/Unstable_Grid2";
import Country from "./country";
import af from '../../flags/af.svg'
import al from '../../flags/al.svg'
import ax from '../../flags/ax.svg'
import dz from '../../flags/dz.svg'
import br from '../../flags/br.svg'
import de from '../../flags/de.svg'
import us from '../../flags/us.svg'
import is from '../../flags/is.svg'
import {Link} from "react-router-dom";

export default function Countries(props) {


    return <Grid2 container rowSpacing={9} columnSpacing={8} sx={{
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '40px',
    }}>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Germany'} population={'81,770,900'} capital={'Berlin'} src={de} region={'Europe'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'United states of America'} population={'333,523,205'} capital={'Washington D.C.'}
                         src={us} region={'Americas'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Brazil'} population={'233,500,295'} capital={'Brasilia'} src={br} region={'Americas'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Iceland'} population={'24,523,205'} capital={'Reykjavik'} src={is} region={'Europe'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Afghanistan'} population={'9,523,205'} capital={'Kabul'} src={af} region={'Asia'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Aland islands'} population={'105,523,205'} capital={'Mariehamen'} src={ax}
                         region={'Europe'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Albania'} population={'92,400,205'} capital={'Tirana'} src={al} region={'Europe'}/>
            </Link>
        </Grid2>
        <Grid2 xs={12} sm={6} md={4} lg={3}>
            <Link to={'./details'} style={{textDecoration: 'none'}}>
                <Country name={'Algeria'} population={'100,805,950'} capital={'Algeirs'} src={dz} region={'Africa'}/>
            </Link>
        </Grid2>
    </Grid2>

}