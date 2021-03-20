import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'


function WinnerModal(props) {
    const [open, setOpen] = React.useState(props.active)

    React.useEffect(() => {
        setOpen(props.active);
    }, [props.active])

    

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            size={'tiny'}
            dimmer={'blurring'}
            open={open}
            style={{ textAlign: 'center', padding: '10px' }}>

            <Modal.Header>
                <p> Player {props.playerWon + 1} Wins !!!</p>
            </Modal.Header>
            <Modal.Content image>
                <Image size='large' src='https://us.123rf.com/450wm/nexusplexus/nexusplexus1708/nexusplexus170805914/84629030-soccer-player-at-stadium-mixed-media.jpg?ver=6' wrapped />
            </Modal.Content>

            <Button onClick={() => {setOpen(false); restart(props)}} positive>New Game</Button>
        </Modal>
    )
}

const restart = (props)=> {
    props.restart();
}

export default WinnerModal;