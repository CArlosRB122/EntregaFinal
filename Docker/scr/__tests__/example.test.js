// src/__tests__/example.test.js
import { Button } from '../components/Button';

describe('Button Component', () => {
    it('should return a string', () => {
        expect(Button()).toBe("Hello, I'm a button!");
    });
});