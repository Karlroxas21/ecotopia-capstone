import Phaser from 'phaser';

export class PrePlayScene2 extends Phaser.Scene {
    constructor() {
        super({ key: 'pre-play-scene2' });
    }

    config: Phaser.Types.Core.GameConfig | any;
    init(data: { config: Phaser.Types.Core.GameConfig }) {
        this.config = data.config;
    }

    background: any;

    bgMusic: any;
    choiceButton: any;

    character: any;
    game_character: any;
    player: any;
    cursor: any;

    garbage: any = [];

    scriptDisplay = "You are standing at the edge of the local river, horrified as you gaze upon a distressing sight";

    create() {
        this.background = this.add.image(0, 0, 'scene2-bg');
        this.background.setOrigin(0, 0);

        this.choiceButton = this.sound.add('choice');

        // Question
        const centerX = this.config.width / 2;
        const centerY = this.config.height / 2;

        const skipButton = this.add.text(
            this.config.width - 90,
            this.config.height / 6 / 2 + 15,
            "Continue",
            { font: '18px Arial', color: '#000000' });
        skipButton.setOrigin(0.5);
        skipButton.setInteractive();
        skipButton.on('pointerdown', () => {
            this.scene.start('play-scene2', { config: this.game.config });
        });

        const guide = this.add.text(
            100,
            centerY - 25,
            '',
            { font: '20px monospace', align: 'left', color: '#000000' }
        );

        let index = 0;
        let startIndexOfSegment = 0;
        const textToType = this.scriptDisplay;

        const typeingTimer = this.time.addEvent({
            delay: 50,
            callback: () => {
                if (index < textToType.length) {
                    if (textToType[index] === ' ' && index - startIndexOfSegment >= 40) {

                        guide.text += '\n';
                        startIndexOfSegment = index + 1;
                    } else {
                        guide.text += textToType[index];
                    }

                    index++;
                } else {
                    typeingTimer.remove();
                }
            },
            callbackScope: this,
            loop: true,
        });

        this.character = this.add.sprite(150, 450, 'character');
        this.character.setScale(0.5);

        this.anims.create({
            key: 'character_key',
            frames: this.anims.generateFrameNumbers('character', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        })
        this.character.anims.play('character_key');

    }

    override update() {

    }
}
